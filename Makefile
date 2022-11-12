all: dev

install: npmstuff repos

full:
	node uncompress.js game.drawio 2>/dev/null | sed -e 's/</\n</g' >_out.xml

dev:
	./fab/fab - DrawioWithTabs dwt.ohm dwt.fab --support='./support.js' <game.drawio

devnext:
	./fab/fab - DrawioWithTabs dwt.ohm dwt.fab --support='./support.js' <game.drawio >_out.js
	~/node_modules/js-beautify/js/bin/js-beautify.js _out.js

repos:
	multigit -r

npmstuff:
	npm install ohm-js yargs atob pako


