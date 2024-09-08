<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Admin dashboard</h2>
    <p>welcome</p>
    <a href="{{route('admin_logout')}}">logout</a>
     @foreach ($adminDetails as $admin)
     <p>The Email you are using is: <a href="{{route('admin_email_edit',$admin->id)}}">{{$admin->email}}</a></p>
     @endforeach
    
</body>
</html>