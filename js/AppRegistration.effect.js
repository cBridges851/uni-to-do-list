import { app } from "./App.const.js";

import { navigationComponentDefinition } from "./navigation/Navigation.component.js";
import { navigationButtonComponentDefinition } from "./navigation-button/NavigationButton.component.js";
import { browseTodosComponentDefintion } from "./view-components/browse-todos/BrowseTodos.component.js";

app.component("navigationButton", navigationButtonComponentDefinition);
app.component("navigation", navigationComponentDefinition);
app.component("browseTodos", browseTodosComponentDefintion);