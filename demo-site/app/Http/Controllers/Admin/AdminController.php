<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Hash;
use Auth;
use App\Models\Admin;
use App\Mail\Websitemail;

class AdminController extends Controller
{
    //
    public function dashboard()
    {
        $adminDetails = Admin::all();
        return view ('admin.dashboard',compact('adminDetails'));
    }
    public function login()
    {
        return view ('admin.login');
    }
    public function login_submit(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $check =$request->all();
        $data = [
            'email' => $check['email'],
            'password' => $check['password'],
        ];

        if(Auth::guard('admin')->attempt($data))
        {
            return redirect()->route('admin_dashboard')->with('success', 'login Successfull');
        }
        else
        {
            return redirect()->route('admin_login')->with('error', 'Invalid Credentials');
        }
    }

    public function logout(){
        Auth::guard('admin')->logout(); 
        return redirect()->route('admin_login')->with('success','Logout Succesdfully done');
    }

    public function forget_password(){
        return view ('admin.forget-password');
    }

    public function forget_password_submit(Request $request){
          $request  ->validate([
            'email'  => 'required|email',
          ]);
          
        $admin_data = Admin::where('email', $request->email)->first();
        if(!$admin_data){
            return redirect()->back()->with('error', "Email not found");
        }
        $token = hash('sha256',time());
        $admin_data->token = $token;
        $admin_data->update();

        $reset_link = url('admin/reset-password/'.$token.'/'. $request->email);
        $subject = "Reset Password";
        $message = "Please click the link below to rest your password" ;
        $message = "<a href = ' ".$reset_link." ' > Click here to reset your password </a>";

        \Mail::to($request->email)->send(new Websitemail($subject,$message));
        return redirect()->back()->with("success","Rest password link has been sent to your email");

    }

    public function reset_password($token, $email)
    {
        $admin_data= Admin::where("email", $email)->where("token", $token)->first();
        if(!$admin_data)
        {
            return redirect()->route("admin_login")->with('error','invalid token or email');
        }
        return view("admin.reset-password",compact('email','token'));
    }

    public function reset_password_submit(Request $request){
        $request ->validate([
            'password' => 'required',
            'password_confirmation' => 'required|same:password'
        ]);
        $admin_data = Admin::where('email', $request->email)->where('token', $request->token)->first();
        $admin_data->password = Hash::make($request->password);
        $admin_data->token = "";
        $admin_data->update();
        return redirect()->route('admin_login')->with("success","Password has been reset successfully");
    }

    public function admin_email_edit($id)
    {
        $admin_data= Admin::find($id);
        return view('admin.adminData',compact('admin_data'));
    }

    public function admin_info_update(Request $request, $id)
    {
        $request ->validate([
            'email' => 'required|same:email',
        ]);
        $admin_data= Admin::find($id);
        $admin_data->email = $request->email;
        $admin_data->update();
        return redirect()->route('admin_dashboard')->with('success','Your Data has been saved successfully');
    }

}
