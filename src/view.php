 <?php require_once __DIR__ . "/todo-modell.php"; ?>
 <!-- App Container -->
 <div class="d-flex flex-column h-80 w-100 align-items-center">
     <h1>Awesome Todo - App</h1>
     <?php if (isset($todos)) : ?>
         <?php include __DIR__ . "/parts/todoCard-view.php" ?>
     <?php else : ?>
         <?php include  __DIR__ . "/parts/errors.php" ?>
     <?php endif; ?>
     <?php include __DIR__ . "/parts/forms.php" ?>

 </div>