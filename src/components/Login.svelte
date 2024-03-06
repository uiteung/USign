<script lang="ts">
	import axios from 'axios';
	import Swal from 'sweetalert2';
	import {getCookie} from 'typescript-cookie';

	if (getCookie("login")?.trim() === "") {
		window.location.href = "/login";
	}

	axios.
		post("https://auth.ulbi.ac.id/api/whatsauth/token", null, {
			headers:{
				'login': getCookie("login"),
			}
	})
		.catch(() => {
		Swal.fire({
			title: "Login",
			text: "Sepertinya Login kamu expire atau kamu belum login, silahkan login terlebih dahulu yaa.....",
			icon: "question",
			showConfirmButton: true,
			showDenyButton: true
		}).then((res) => {
			if (res.isConfirmed) {
				window.location.href = "/";
			}
		});
		}
	)

</script>