<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'password'];

    public function courses()
    {
        return $this->hasMany(Course::class, 'teacher_id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
