const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootgcwim/",
            name: "springbootgcwim",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootgcwim/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "传染病防控宣传系统"
        } 
    }
}
export default base
