all: dev

install: npmstuff repos

full:
	node uncompress.js game.drawio 2>/dev/null | sed -e 's/</\n</g' >_out.xml

dev:
	./fab/fab - DrawioWithTabs dwt.ohm dwt.fab --support='./support.js' 2>/dev/null <game.drawio >_out0.js
	sed -e 's/</\n</g' <_out0.js >_out.js
	xmllint --format _out.js

repos:
	multigit -r

npmstuff:
	npm install ohm-js yargs atob pako


