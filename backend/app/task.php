<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\column;

class task extends Model
{
    public $fillable = [
        'column_id',
        'title',
        'description',
        'order'
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
        $this->table = 'task';
    }

    /**
     * Get the comments for the blog post.
     */
    public function column()
    {
        return $this->belongsTo('App\Column');
        //return $this->hasMany(task::class);
    }
}
