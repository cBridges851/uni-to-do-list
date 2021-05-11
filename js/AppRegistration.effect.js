import { app } from "./App.const.js";

import { navigationComponentDefinition } from "./navigation/Navigation.component.js";
import { navigationButtonComponentDefinition } from "./navigation-button/NavigationButton.component.js";
import { browseTodosComponentDefintion } from "./view-components/browse-todos/BrowseTodos.component.js";
import { listItemComponentDefinition } from "./list-item/ListItem.component.js";
import { addTodosComponentDefinition } from "./view-components/add-todos/AddTodos.component.js";
import { completedTodosComponentDefinition } from "./view-components/completed-todos/CompletedTodos.component.js";

app.component("navigationButton", navigationButtonComponentDefinition);
app.component("navigation", navigationComponentDefinition);
app.component("browseTodos", browseTodosComponentDefintion);
app.component("listItem", listItemComponentDefinition);
app.component("addTodos", addTodosComponentDefinition);
app.component("completedTodos", completedTodosComponentDefinition);