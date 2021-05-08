class NavigationButtonComponent {
    navigate() {
        if (this.section === "View") {
            window.open("#!/browse-todos", "_self")
        }
    }
}

export const navigationButtonComponentDefinition = {
    bindings: {
        section: "="
    },
    templateUrl: "./js/navigation-button/navigation-button.html",
    controller: NavigationButtonComponent
};