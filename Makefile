all: dev

install: npmstuff repos

full:
	./fab/fab - DrawioWithTabs dwt.ohm dwt.fab --support='./support.js' 2>/dev/null <game.drawio >_out0.xml
	sed -e 's/</\n</g' <_out0.xml >_out.xml
	xmllint --format _out.xml
	@rm _out0.xml

dev: 
	./fab/fab - DrawioWithTabs dwt.ohm dwt.fab --support='./support.js' 2>/dev/null <containment.drawio >_out0.xml
	sed -e 's/</\n</g' <_out0.xml >_out.xml
	xmllint --format _out.xml
	@rm _out0.xml

repos:
	multigit -r

npmstuff:
	npm install ohm-js yargs atob pako

clean:
	rm -f _out.*

