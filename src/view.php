<!-- App Container -->
<div x-data="$store.todos" class="d-flex flex-column h-80 w-100 align-items-center">
    <h1>Awesome Todo - App</h1>
    <template x-if="{enable}">
        <?php include __DIR__ . "/parts/todoCard-view.php" ?>
    </template>
    <template x-if="enable !== true">
        <?php include  __DIR__ . "/parts/errors.php" ?>
    </template>
    <?php include __DIR__ . "/parts/forms.php" ?>

</div>