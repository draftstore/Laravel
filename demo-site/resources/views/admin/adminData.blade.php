<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin Data View</title>
</head>
<body>
    <h2>Admin Data View</h2>
    <form action="{{route('admin_info_update',$admin_data->id)}}" method="POST">
        {{ csrf_field() }}
        @method('PUT')
        <input type="email" name="email" value="{{ $admin_data->email}}">
        <button type="submit">Submit</button>
    </form>
</body>
</html>