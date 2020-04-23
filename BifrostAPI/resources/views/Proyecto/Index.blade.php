@extends('layouts.main')

@section('content')
<div ng-app='bifrost' ng-controller='ProyectoController'>
    <p>Name: <input type="text" ng-model="name"></p>
    <p ng-bind="name"></p>
</div>
@endsection

@section('Script')
<script src="{{ asset('js/Script/Controller/ProyectoController.js') }}"></script>
@endsection