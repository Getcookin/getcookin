function reveal(diettype) {
	$('div.all').hide(); /*hide all*/
	$('.'+diettype).show(); /*then show all with clicked diettype*/
	$('a').removeClass("active"); /*remove active (=makes it bold) from all links*/
	$('a.'+diettype).addClass("active"); /*adds active to clicked link, which makes it bold*/
}