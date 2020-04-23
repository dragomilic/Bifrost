<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use Rebing\GraphQL\Support\Type as GraphQLType;
use GraphQL\Type\Definition\Type;
use GraphQL;
use App\Proyecto;

class ProyectosType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Proyecto',
        'description' => 'A type',
        'model' => Proyecto::class, 
    ];

    public function fields(): array
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
                'type' => Type::nonNull(Type::int()),
                'description' => 'id Of Event',
            ],
            'Nombre' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Nombre Of Event',
            ],
            'Descripcion' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Descripcion Of Event',
            ],
            'Url' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Url Of Event',
            ]
        ];
    }
}
