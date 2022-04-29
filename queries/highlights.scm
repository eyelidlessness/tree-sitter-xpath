(path_expr path: (_) @path.field)
(path_expr (step_expr node_test: (_))) @path.node_test
(path_expr (step_expr axis_movement: (_))) @path.axis_mopvement
(path_expr (step_expr (context_item_expr))) @path.named
(context_item_expr) @path.not_named
((path_expr) @path.root (#match? @path.root "^[/.]"))
(id_function_call) @path.id
(query) @query