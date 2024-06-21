  <?php
  function createTodos(array $todos): void
  {
    foreach ($todos as $todo) {
      echo "<p class='h-10 w-40 mb-2 bg-light shadow-lg bg-white-rounded'> Todo: " . htmlspecialchars($todo["title"], ENT_QUOTES, "UTF-8") . "</p>";
    }
  } ?>