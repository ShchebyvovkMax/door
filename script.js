// var button = document.getElementsByTagName("button")[2];
// button.addEventListener("click", function(){
// 	console.log("Click");
// })
var id = 'victory';
lpTag.identities=[];
lpTag.identities.push(identityFn);
function identityFn(callback) {
	callback({
		iss: “ replace with issuer ”,
		acr: “loa1”,
		sub: “ replace with customerID ”
	});
}
