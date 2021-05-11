class NavigationButtonComponent {
    navigate() {
        window.open(this.section.url, "_self");
    }
}

export const navigationButtonComponentDefinition = {
    bindings: {
        section: "="
    },
    templateUrl: "./js/navigation-button/navigation-button.html",
    controller: NavigationButtonComponent
};