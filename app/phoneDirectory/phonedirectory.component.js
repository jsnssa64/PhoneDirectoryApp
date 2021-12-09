app
    .Module("phoneDirectoryApp")
        .Component('phoneDirectory', {
    template: "phoneDirectory/phoneDirectory.template.js",
    controller: function phoneDirectoryController(){
    this.phonelist = [{number: "123-312-123"},
                        {number: "123-312-123"},
                        {number: "123-312-123"},
                        {number: "123-312-123"},
                        {number: "123-312-123"},
                        {number: "123-312-123"}];
    }
})