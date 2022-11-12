all:
	node uncompress.js test.txt 2>/dev/null | sed -e 's/</\n</g' >_out.xml

