---
title: Fabb website style guide
---

Vivamus [nulla felis][1], fermentum ac libero et, lobortis blandit dui[^1]. Praesent id dui et ante maximus bibendum quis non neque.

Vivamus &lt;em&gt;<em>nulla felis, fermentum ac libero et</em>&lt;/em&gt;, lobortis blandit dui. Praesent &lt;strong&gt;<strong>id dui et ante maximus bibendum quis non neque</strong>&lt;/strong&gt;. Nam sodales ligula vitae lacus ultrices scelerisque. Integer molestie ornare magna a elementum. Mauris suscipit sem neque, ut consectetur dolor maximus sed. Donec aliquam rhoncus quam, nec consequat metus porta eget. Pellentesque vehicula efficitur condimentum. Vivamus iaculis ornare mi eu scelerisque. Quisque consectetur, erat vel hendrerit suscipit, nisl mi consectetur risus, sit amet efficitur arcu nulla a quam. Curabitur lobortis nisl nulla, a tincidunt arcu eleifend ut. Vivamus nulla felis, fermentum ac libero et, lobortis blandit dui. Praesent id dui et ante maximus bibendum quis non neque.

## This is a heading 2

Vivamus nulla felis, fermentum ac libero et, lobortis blandit dui. Praesent id dui et ante maximus bibendum quis non neque.

- 1
- 2
- 3[^2]
   - 3.1
   - 3.2
      - 3.2.1
   - 3.3
- 4

1. 1
1. 2
1. 3
   1. 3.1
   1. 3.2
      1. 3.2.1
   1. 3.3
1. 4

Nam sodales ligula vitae lacus ultrices scelerisque. Integer molestie ornare magna a elementum. Mauris suscipit sem neque, ut consectetur dolor maximus sed. Donec aliquam rhoncus quam, nec consequat metus porta eget. Pellentesque vehicula efficitur condimentum. Vivamus iaculis ornare mi eu scelerisque. Quisque consectetur, erat vel hendrerit suscipit, nisl mi consectetur risus, sit amet efficitur arcu nulla a quam. Curabitur lobortis nisl nulla, a tincidunt arcu eleifend ut. Vivamus nulla felis, fermentum ac libero et, lobortis blandit dui. Praesent id dui et ante maximus bibendum quis non neque.

### This is a heading 3

Quisque consectetur, erat vel hendrerit suscipit, nisl mi consectetur risus, sit amet efficitur arcu nulla a quam. Curabitur lobortis nisl nulla, a tincidunt arcu eleifend ut. Vivamus nulla felis, fermentum ac libero et, lobortis blandit dui. Praesent id dui et ante maximus bibendum quis non neque[^3].

Vivamus nulla felis, fermentum ac libero et, lobortis blandit dui. Praesent id dui et ante maximus bibendum quis non neque.

#### This is a heading 4

Quisque consectetur, erat vel hendrerit suscipit, nisl mi consectetur risus, sit amet efficitur arcu nulla a quam. Curabitur lobortis nisl nulla, a tincidunt arcu eleifend ut. Vivamus nulla felis, fermentum ac libero et, lobortis blandit dui. Praesent id dui et ante maximus bibendum quis non neque.

Vivamus nulla felis, fermentum ac libero et, lobortis blandit dui. Praesent id dui et ante maximus bibendum quis non neque.

##### This is a heading 5

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat nisl tortor, quis eleifend erat tristique in. Duis quis ex eget felis elementum sodales. Sed vehicula, ex nec scelerisque maximus, elit tortor condimentum purus, sagittis tristique felis urna at odio. Aliquam elementum rutrum leo. Suspendisse dapibus lacinia quam, at consequat sem aliquam quis. Nam sodales ligula vitae lacus ultrices scelerisque. Integer molestie ornare magna a elementum. Mauris suscipit sem neque, ut consectetur dolor maximus sed. Donec aliquam rhoncus quam, nec consequat metus porta eget. Pellentesque vehicula efficitur condimentum. Vivamus iaculis ornare mi eu scelerisque. Quisque consectetur, erat vel hendrerit suscipit, nisl mi consectetur risus, sit amet efficitur arcu nulla a quam. Curabitur lobortis nisl nulla, a tincidunt arcu eleifend ut. Vivamus nulla felis, fermentum ac libero et, lobortis blandit dui. Praesent id dui et ante maximus bibendum quis non neque.

###### This is a heading 6[^4]

Quisque consectetur, erat vel hendrerit suscipit, nisl mi consectetur risus, sit amet efficitur arcu nulla a quam. Curabitur lobortis nisl nulla, a tincidunt arcu eleifend ut. Vivamus nulla felis, fermentum ac libero et, lobortis blandit dui. Praesent id dui et ante maximus bibendum quis non neque.

Vivamus nulla felis, fermentum ac libero et, lobortis blandit dui. Praesent id dui et ante maximus bibendum quis non neque.

## Code

### General

```
Quisque consectetur,
erat vel hendrerit suscipit,
nisl mi consectetur risus,
sit amet efficitur arcu nulla a quam.
```

### Bash

```bash
#!/usr/bin/env bash

#USE git -C for git in a dir

set -e

if [[ ! -z $DEBUG ]]; then
  set -x
fi

poll_delay=180

repo=$1
repo_dir=theme

./git-poll.sh $repo 3.x $poll_delay | {
  while read hash; do

    # Make sure the repo exists locally
    if [[ ! -d "$repo_dir" ]]; then
      git clone $repo "$repo_dir"
    fi

    ./build-drupal.sh "$repo_dir"
  done
}
```

### JS

```javascript
class People {
constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
    setName(name) {
      this.name = name;
    }
}
let person = new People("Jon Snow");
```

### PHP

```php
  /**
   * Processes a configuration change.
   *
   * @param string $collection
   *   The configuration collection to process changes for.
   * @param string $op
   *   The change operation.
   * @param string $name
   *   The name of the configuration to process.
   *
   * @throws \Exception
   *   Thrown when the import process fails, only thrown when no importer log is
   *   set, otherwise the exception message is logged and the configuration
   *   is skipped.
   */
  protected function processConfiguration($collection, $op, $name) {
    try {
      $processed = FALSE;
      if ($collection == StorageInterface::DEFAULT_COLLECTION) {
        $processed = $this->importInvokeOwner($collection, $op, $name);
      }
      if (!$processed) {
        $this->importConfig($collection, $op, $name);
      }
    }
    catch (\Exception $e) {
      $this->logError($this->t('Unexpected error during import with operation @op for @name: @message', ['@op' => $op, '@name' => $name, '@message' => $e->getMessage() . PHP_EOL . $e->getTraceAsString()]));

      // Error for that operation was logged, mark it as processed so that
      // the import can continue.
      $this->setProcessedConfiguration($collection, $op, $name);
    }
  }
```

[^1]: Lorem [ipsum dolor][1] sit amet, consectetur adipiscing elit. Donec feugiat nisl tortor, quis eleifend erat tristique in. Duis quis ex eget felis elementum sodales. Sed vehicula, ex nec scelerisque maximus, elit tortor condimentum purus, sagittis tristique felis urna at odio. Aliquam elementum rutrum leo. Suspendisse dapibus lacinia quam, at consequat sem aliquam quis. Nam sodales ligula vitae lacus ultrices scelerisque. Integer molestie ornare magna a elementum. Mauris suscipit sem neque, ut consectetur dolor maximus sed. Donec aliquam rhoncus quam, nec consequat metus porta eget. Pellentesque vehicula efficitur condimentum. Vivamus iaculis ornare mi eu scelerisque. Quisque consectetur, erat vel hendrerit suscipit, nisl mi consectetur risus, sit amet efficitur arcu nulla a quam. Curabitur lobortis nisl nulla, a tincidunt arcu eleifend ut. Vivamus nulla felis, fermentum ac libero et, lobortis blandit dui. Praesent id dui et ante maximus bibendum quis non neque.
[^2]: Donec feugiat nisl tortor, quis eleifend erat tristique in.
[^3]: Vivamus nulla felis, fermentum ac libero et, lobortis blandit dui. Praesent id dui et ante maximus bibendum quis non neque.
[^4]: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat nisl tortor, quis eleifend erat tristique in. Duis quis ex eget felis elementum sodales. Sed vehicula, ex nec scelerisque maximus, elit tortor condimentum purus, sagittis tristique felis urna at odio. Aliquam elementum rutrum leo. Suspendisse dapibus lacinia quam, at consequat sem aliquam quis. Nam sodales ligula vitae lacus ultrices scelerisque. Integer molestie ornare magna a elementum. Mauris suscipit sem neque, ut consectetur dolor maximus sed. Donec aliquam rhoncus quam, nec consequat metus porta eget. Pellentesque vehicula efficitur condimentum. Vivamus iaculis ornare mi eu scelerisque. Quisque consectetur, erat vel hendrerit suscipit, nisl mi consectetur risus, sit amet efficitur arcu nulla a quam. Curabitur lobortis nisl nulla, a tincidunt arcu eleifend ut. Vivamus nulla felis, fermentum ac libero et, lobortis blandit dui. Praesent id dui et ante maximus bibendum quis non neque.

[1]: https://example.com
