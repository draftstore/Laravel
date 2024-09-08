<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Reset Password</h1>
    @if($errors->any())
          @foreach($errors->all() as $error)
          <li>{{ $error }}</li>
          @endforeach
    @endif

    @if(Session::has('error'))
    <li>{{Session::get('error')}}</li>
    @endif
    
    @if(Session::has('success'))
    <li>{{Session::get('success')}}</li>
    @endif

    <form action="{{route('admin_reset_password_submit')}}" method="post">
        @csrf
        <input type="hidden" name="token" value="{{$token}}">
        <input type="hidden" name="email" value="{{$email}}">

        
        <input type="password" name="password" placeholder="Please write your password">
        <input type="password" name="password_confirmation" placeholder="Please confirm your password">
        <button type="submit">Submit</button>
    </form>

</body>
</html>