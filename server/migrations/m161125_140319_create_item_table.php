<?php

use yii\db\Migration;

/**
 * Handles the creation of table `item`.
 */
class m161125_140319_create_item_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('item', [
            'id' => $this->primaryKey(),
            'title' => $this->string()->notNull(),
            'is_completed' => $this->boolean()->notNull()->defaultValue(false),
            'created_at' => $this->timestamp()->notNull()
        ]);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('item');
    }
}
