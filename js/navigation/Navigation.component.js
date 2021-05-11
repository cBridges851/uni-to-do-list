class NavigationComponent {
    constructor() {
        this.sections = [
            {
                "name": "Add",
                "url": "#!/add-todos"
            },
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