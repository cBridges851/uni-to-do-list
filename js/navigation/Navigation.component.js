class NavigationComponent {
    constructor() {
        this.sections = [
            {
                "name": "View",
                "url": "#!/browse-todos"
            }
        ];
    }
}

export const navigationComponentDefinition = {
    templateUrl: "./js/navigation/navigation.html",
    controller: NavigationComponent
}