<div class="d-flex flex-column w-100 h-20 shadow-lg bg-white-rounded align-items-center">
    <?php if (!(isset($todos))) : ?>
        <h1 class="text-center text-danger font-weight-bold todo-warning-hero">
            Error Detected <i class="animate__animated animate__shakeYbi bi-bug-fill"></i>:
        </h1>
        <p class="w-100 text-center lead highlight-text">Todos contains: <?php echo var_dump($todos) ?></p>

    <?php endif; ?>
</div>