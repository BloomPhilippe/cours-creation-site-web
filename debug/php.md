## Introduction

- Ajouter XDebug

Si vous n'avez pas l'extension xdebug, télécharger la et placer la dans un dossier approprié.
Dans zend_extension, ecrivez le lien (absolu) vers l'extension xdebug
Pour Windows c'est un fichier .dll
Pour linux c'est un fichier .so

````php
zend_extension = "Lien absolu vers l'extension xdebug"
xdebug.remote_enable=1
xdebug.remote_autostart=1
xdebug.default_enable=1
xdebug.remote_host=127.0.0.1
xdebug.remote_port=9000
xdebug.idekey=PHPSTROM
xdebug.remote_handler=dbgp
xdebug.remote_mode=req
xdebug.dump_globals=1
xdebug.dump=COOKIE,FILES,GET,POST,REQUEST,SERVER,SESSION
xdebug.dump.SERVER=REMOTE_ADDR,REQUEST_METHOD,REQUEST_URI
xdebug.show_local_vars=1
xdebug.show_mem_delta=1
xdebug.collect_includes=1
xdebug.collect_vars=1
xdebug.collect_params=4
xdebug.collect_return=1
xdebug.auto_trace=0
xdebug.trace_options=0
xdebug.trace_format=0
xdebug.trace_output_dir=""
xdebug.trace_output_name="trace.%t"
xdebug.profiler_enable=0
xdebug.profiler_append=1
xdebug.profiler_enable_trigger=1
xdebug.profiler_output_dir=""
xdebug.profiler_output_name="cachegrind.out.%s.%t"
````