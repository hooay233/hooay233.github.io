<style>h1{display: none}</style>
<script src="https://upcdn.b0.upaiyun.com/libs/jquery/jquery-2.0.2.min.js">
<video id="rick" muted autoplay="autoplay" loop="loop">
	<source src="./rick.mp4" type="video/mp4"></source>
</video>
<script>
	var radio = true;
	$(() => {
		$("body").hover(() => {
			if radio{
				var radio = false;
				let rick = document.getElementById("rick");
				rick.removeAttribute("muted");
			}
		})
	})
</script>

