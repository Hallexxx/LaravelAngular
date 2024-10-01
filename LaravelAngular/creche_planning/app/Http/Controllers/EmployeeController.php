<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        // Récupérer tous les employés
        return response()->json(Employee::all());
    }
}
