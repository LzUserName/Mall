moudle.exports={
	devServer:{
		host:"localhost",
		port:"8080",
		proxy:{
			"/api":{
				target:"",
				changeOrigin:true,
				
			}
		}
	}
}