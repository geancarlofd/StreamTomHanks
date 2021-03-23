
$(document).ready(function(){

	$("#btnLogin").click(function(){
		
		var senha_hash_md5 = $.MD5($('#inputSenha').val());

		var myBitArray = sjcl.hash.sha256.hash($('#inputSenha').val());
		var senha_hash_sha256 = sjcl.codec.hex.fromBits(myBitArray);

		alert(senha_hash_md5);
		alert(senha_hash_sha256);

		return false;
	});

});

