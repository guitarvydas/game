all: dev

install: npmstuff

full:
	node uncompress.js game.drawio 2>/dev/null | sed -e 's/</\n</g' >_out.xml

dev:
	# node uncompress.js game.drawio
	node uncompress.js test.txt

npmstuff:
	npm install ohm-js yargs atob pako


