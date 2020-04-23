<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use Closure;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\SelectFields;
use Rebing\GraphQL\Support\Query;
use GraphQL;
use App\Proyecto;
use App\GraphQL\Types\ProyectosType;


class ProyectosQuery extends Query
{
    protected $attributes = [
        'name' => 'Proyectos',
        'description' => 'A query'
    ];

    public function type(): Type
    {
        return Type::listOf(GraphQL::type('Proyectos'));
    }

    public function args(): array
    {
        /*
           $table->bigIncrements('Indice');
            $table->string('Nombre');
            $table->string('Descripcion');
            $table->string('Url');
            $table->unsignedBigInteger('IdEstado');
        */
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::int(),
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        /** @var SelectFields $fields */
        $fields = $getSelectFields();
        $select = $fields->getSelect();
        $with = $fields->getRelations();

        if(isset($args['id']))
        {
            return Proyecto::where('id', '=', $args['id'])->get();
        }

        $proyecto = Proyecto::where($with)->select($select)->get();

        return $proyecto;
    }
}
