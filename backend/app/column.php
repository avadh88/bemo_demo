<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\task;

class column extends Model
{
    public $fillable = [
        'column_name'
    ];

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    protected $primaryKey = 'id';

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->table = 'column';
    }

    /**
     * Get the comments for the blog post.
     */
    public function tasks()
    {
        return $this->hasMany('App\task', 'column_id', 'id')->orderBy('order', 'asc');;
        //return $this->belongsTo(task::class);
    }
    
}
