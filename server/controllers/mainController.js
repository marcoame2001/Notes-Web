exports.homepage = async(req,res)=> {

    const locals = {
        title:"NodeJs Notes",
        description: "Free NodeJS Notes App",
    };

res.render("index", locals);
}


exports.about = async(req,res)=> {

    const locals = {
        title:"About - NodeJs Notes",
        description: "NodeJs Notes",
    };

res.render("about", locals);
}

