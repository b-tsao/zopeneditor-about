(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{166:function(e,o,t){e.exports=t.p+"assets/img/rse-help-web.d70ac510.png"},283:function(e,o,t){"use strict";t.r(o);var d=t(28),s=Object(d.a)({},(function(){var e=this,o=e.$createElement,d=e._self._c||o;return d("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[d("h1",{attrs:{id:"using-the-rse-api-cli"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#using-the-rse-api-cli"}},[e._v("#")]),e._v(" Using the RSE API CLI")]),e._v(" "),d("p",[e._v("After installing IBM RSE API Plug-in for Zowe CLI, you can use it in a command-line window on your development machine. You can issue commands to perform the following tasks:")]),e._v(" "),d("ul",[d("li",[e._v("List, create, download, upload, and delete MVS data sets and members as well as USS files and directories.")]),e._v(" "),d("li",[e._v("Submit jobs, list jobs and spool files, download or view spool content, view job status, cancel a job, and delete a job.")])]),e._v(" "),d("h2",{attrs:{id:"learning-about-commands-and-options"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#learning-about-commands-and-options"}},[e._v("#")]),e._v(" Learning about commands and options")]),e._v(" "),d("p",[e._v("To learn about a command and all options for the command, add "),d("code",[e._v("--help")]),e._v(" after the command. For instance, by specifying "),d("code",[e._v("zowe rse list --help")]),e._v(", you can see all the different items that can be listed and a help response like this in the terminal:")]),e._v(" "),d("div",{staticClass:"language-terminal extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[e._v("DESCRIPTION\n -----------\n\n   List uss file and folders, data sets and data set members, or jobs and spool\n   files. Optionally, you can list their details and attributes.\n\n USAGE\n -----\n\n   zowe rse-api-for-zowe-cli list <command>\n\n   Where <command> is one of the following:\n\n COMMANDS\n --------\n\n   all-members | am            List all members of a pds\n   data-set | ds               List data sets\n   jobs | js                   List z/OS jobs on JES spool/queues\n   spool-files-by-jobid | sfbj List spool files of a z/OS job\n   uss-files | uss             List USS files\n\nGLOBAL OPTIONS\n --------------\n\n   --response-format-json  | --rfj (boolean)\n\n      Produce JSON formatted data from a command\n\n   --help  | -h (boolean)\n\n      Display help text\n\n   --help-examples  (boolean)\n\n      Display examples for all the commands in a the group\n\n   --help-web  | --hw (boolean)\n\n      Display HTML help in browser\n\n")])])]),d("p",[e._v("If you want to view the help response on a browser, enter "),d("code",[e._v("--help-web")]),e._v(", for example, "),d("code",[e._v("zowe rse list --help-web")]),e._v(".")]),e._v(" "),d("p",[d("img",{attrs:{src:t(166),alt:"Online Help rendered as a Web page"}})]),e._v(" "),d("h2",{attrs:{id:"rse-cli-commands"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#rse-cli-commands"}},[e._v("#")]),e._v(" RSE CLI commands")]),e._v(" "),d("p",[e._v("Refer to the following tables for commands that are available in the plug-in and their equivalent Zowe CLI z/OSMF commands.")]),e._v(" "),d("h3",{attrs:{id:"uss"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#uss"}},[e._v("#")]),e._v(" USS")]),e._v(" "),d("table",[d("thead",[d("tr",[d("th",[e._v("RSE API plugin command")]),e._v(" "),d("th",[e._v("Zowe CLI z/OSMF command")]),e._v(" "),d("th",[e._v("Options")]),e._v(" "),d("th",[e._v("Description")])])]),e._v(" "),d("tbody",[d("tr",[d("td",[d("code",[e._v('zowe rse ls uss "/u/user"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files ls uss "/u/user"')])]),e._v(" "),d("td"),e._v(" "),d("td",[e._v("List USS files using a path to search.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse create uss "/u/user/newFile"')])]),e._v(" "),d("td"),e._v(" "),d("td",[d("code",[e._v("--type")]),e._v(", "),d("code",[e._v("--permissions")])]),e._v(" "),d("td",[e._v("Create a USS file or directory. The required option "),d("code",[e._v("--type")]),e._v(" states it is a file ("),d("code",[e._v("f")]),e._v(") or directory ("),d("code",[e._v("d")]),e._v("). "),d("code",[e._v("--permissions")]),e._v(' states the permissions of the file or directory. If permissions are not entered, the default will be "rwxrw-r--".')])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse del uss "/u/user/fileName"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files del uss "/u/user/fileName"')])]),e._v(" "),d("td"),e._v(" "),d("td",[e._v("Delete UNIX files.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse del uss "/u/user/directoryName"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files del uss "/u/user/directoryName"')])]),e._v(" "),d("td"),e._v(" "),d("td",[e._v("Delete UNIX directories or folders.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse dl uf "/path/to/fileName"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files dl uf "/path/to/fileName"')])]),e._v(" "),d("td",[d("code",[e._v("-f")])]),e._v(" "),d("td",[e._v("Download a file from the host to local. To download files to a specific location on local, specify the option "),d("code",[e._v("-f")]),e._v(" followed by a path and file name of location on local.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse ul ftu "localFile.txt" "/u/user/fileName"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files ul ftu "localFile.txt" "/u/user/fileName"')])]),e._v(" "),d("td"),e._v(" "),d("td",[e._v("Upload a local file to USS.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse ul dtu "/path/to/localDir" "/path/to/dirName"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files ul dtu "/path/to/localDir" "/path/to/dirName"')])]),e._v(" "),d("td",[d("code",[e._v("-r")])]),e._v(" "),d("td",[e._v("Upload a directory to uss. To upload the directory recursively, specify the option "),d("code",[e._v("-r")]),e._v(".")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse rename uss "/u/user/fileName" "newFileName"')])]),e._v(" "),d("td"),e._v(" "),d("td"),e._v(" "),d("td",[e._v("Rename a UNIX file or directory")])])])]),e._v(" "),d("h3",{attrs:{id:"mvs"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#mvs"}},[e._v("#")]),e._v(" MVS")]),e._v(" "),d("table",[d("thead",[d("tr",[d("th",[e._v("RSE API plugin command")]),e._v(" "),d("th",[e._v("Zowe CLI z/OSMF command")]),e._v(" "),d("th",[e._v("Options")]),e._v(" "),d("th",[e._v("Description")])])]),e._v(" "),d("tbody",[d("tr",[d("td",[d("code",[e._v("zowe rse ls ds filter")])]),e._v(" "),d("td",[d("code",[e._v("zowe files ls ds filter")])]),e._v(" "),d("td",[d("code",[e._v("-a")])]),e._v(" "),d("td",[e._v("List data sets using a filter to search, for example, "),d("code",[e._v("name")]),e._v(", "),d("code",[e._v("name.*")]),e._v(". To list the data set's attributes, specify the option "),d("code",[e._v("-a")]),e._v(".")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse ls am "hlq.dsname"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files ls am "hlq.dsname"')])]),e._v(" "),d("td"),e._v(" "),d("td",[e._v("List all members of a PDS using the data set name to search.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse create pds "hlq.dsname"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files create pds "hlq.dsname"')])]),e._v(" "),d("td",[d("code",[e._v("--bs")]),e._v(", "),d("code",[e._v("--db")]),e._v(", "),d("code",[e._v("--dt")]),e._v(", "),d("code",[e._v("--rf")]),e._v(", "),d("code",[e._v("--rl")]),e._v(", "),d("code",[e._v("--ss")]),e._v(", "),d("code",[e._v("--vs")]),e._v(", "),d("code",[e._v("--au")]),e._v(", "),d("code",[e._v("--ab")]),e._v(", "),d("code",[e._v("--ps")])]),e._v(" "),d("td",[e._v("Create a partitioned data set (PO).  Options include: block size (bs), device type (dt), directory blocks (db), record format (rf), record length (rl), secondary space (ss), allocation unit (au), average block (ab), primary (ps), and volume serial (vs). If no options are specified, a default option will be used.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse create ps "hlq.dsname"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files create ps "hlq.dsname"')])]),e._v(" "),d("td",[d("code",[e._v("--bs")]),e._v(", "),d("code",[e._v("--db")]),e._v(", "),d("code",[e._v("--dt")]),e._v(", "),d("code",[e._v("--rf")]),e._v(", "),d("code",[e._v("--rl")]),e._v(", "),d("code",[e._v("--ss")]),e._v(", "),d("code",[e._v("--vs")]),e._v(", "),d("code",[e._v("--au")]),e._v(", "),d("code",[e._v("--ab")]),e._v(", "),d("code",[e._v("--ps")])]),e._v(" "),d("td",[e._v("Create a sequential data set (PS).  Options include: block size (bs), device type (dt), directory blocks (db), record format (rf), record length (rl), secondary space (ss), allocation unit (au), average block (ab), primary (ps), and volume serial (vs). If no options are specified, a default option will be used.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse del ds "hlq.dsname"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files del ds "hlq.dsname"')])]),e._v(" "),d("td"),e._v(" "),d("td",[e._v("Delete sequential (PS) and partitioned (PO) data sets or members.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse dl ds "hlq.dsname(member)"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files dl ds "hlq.dsname(member)"')])]),e._v(" "),d("td",[d("code",[e._v("-f")]),e._v(" "),d("code",[e._v("-e")])]),e._v(" "),d("td",[e._v("Download a PS data set or a single member of a PO data set from the host to local. Specify "),d("code",[e._v("-f")]),e._v(" to indicate the path on local to download to. Specify "),d("code",[e._v("-e")]),e._v(" to indicate the extension of the file downloaded on local; if the extension is not indicated, the file will be saved as a text file.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse dl am "hlq.dsname"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files dl am "hlq.dsname"')])]),e._v(" "),d("td",[d("code",[e._v("-d")]),e._v(" "),d("code",[e._v("-e")])]),e._v(" "),d("td",[e._v("Download all members of a PO data set from the host to local. Specify "),d("code",[e._v("-d")]),e._v(" to indicate the directory on local to download to. Specify "),d("code",[e._v("-e")]),e._v(" to indicate the extension of the file downloaded on local; if the extension is not indicated, the file will be saved as a text file.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse ul ftds "localFile.txt" "hlq.dsname"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files ul ftds "localFile.txt" "hlq.dsname"')])]),e._v(" "),d("td"),e._v(" "),d("td",[e._v("Upload a local file to the host as a data set.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse ul dtp "localDirectory" "hlq.dsname"')])]),e._v(" "),d("td",[d("code",[e._v('zowe files ul dtp "localDirectory" "hlq.dsname"')])]),e._v(" "),d("td"),e._v(" "),d("td",[e._v("Upload a directory to a PDS.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse rename data-set "hlq.dsname" "hlq.newdsname"')])]),e._v(" "),d("td"),e._v(" "),d("td"),e._v(" "),d("td",[e._v("Rename a data set.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse rename data-set-member "hlq.dsname(memberName)" "newMemberName"')])]),e._v(" "),d("td"),e._v(" "),d("td"),e._v(" "),d("td",[e._v("Rename a data set member.")])])])]),e._v(" "),d("h3",{attrs:{id:"jes"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#jes"}},[e._v("#")]),e._v(" JES")]),e._v(" "),d("table",[d("thead",[d("tr",[d("th",[e._v("RSE API plug-in command")]),e._v(" "),d("th",[e._v("Zowe CLI z/OSMF command")]),e._v(" "),d("th",[e._v("Options")]),e._v(" "),d("th",[e._v("Description")])])]),e._v(" "),d("tbody",[d("tr",[d("td",[d("code",[e._v("zowe rse ls js")])]),e._v(" "),d("td",[d("code",[e._v("zowe jobs ls js")])]),e._v(" "),d("td",[d("code",[e._v("-o")]),e._v(", "),d("code",[e._v("-p")]),e._v(", "),d("code",[e._v("-s")])]),e._v(" "),d("td",[e._v("List jobs on JES spool or queues. The option "),d("code",[e._v("-o")]),e._v(" indicates the owner of the jobs. The option "),d("code",[e._v("-p")]),e._v(" indicates the job's name prefix. The option "),d("code",[e._v("-s")]),e._v(" indicates the status of the listed jobs (ALL, ACTIVE, OUTPUT, or INPUT).")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse ls sfbj "jobId"')])]),e._v(" "),d("td",[d("code",[e._v('zowe jobs ls sfbj "jobId"')])]),e._v(" "),d("td"),e._v(" "),d("td",[e._v("List the spool files (DDs) for a z/OS job on the JES or spool queues for a z/OS job ID.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse delete job "jobId"')])]),e._v(" "),d("td",[d("code",[e._v('zowe jobs delete job "jobId"')])]),e._v(" "),d("td"),e._v(" "),d("td",[e._v("Delete a single job by job ID.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse dl o "jobId"')])]),e._v(" "),d("td",[d("code",[e._v('zowe jobs dl o "jobId"')])]),e._v(" "),d("td",[d("code",[e._v("-d")]),e._v(", "),d("code",[e._v("-e")]),e._v(", "),d("code",[e._v("--ojd")])]),e._v(" "),d("td",[e._v("Download job output by job ID. Use the option "),d("code",[e._v("-d")]),e._v(" to specify a local directory for the download. Use the option "),d("code",[e._v("-e")]),e._v(" to specify a files extension to save the job output with. Use the option "),d("code",[e._v("--ojd")]),e._v(" to save the output directly to the specified directory without creating a subdirectory named after the ID of the job.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse submit data-set "hlq.datasetName(jclMember)')])]),e._v(" "),d("td",[d("code",[e._v('zowe jobs submit data-set "hlq.datasetName(jclMember)')])]),e._v(" "),d("td",[d("code",[e._v("--wfo")]),e._v(" , "),d("code",[e._v("--wfa")]),e._v(" , "),d("code",[e._v("--vasc")]),e._v(" , "),d("code",[e._v("-d")]),e._v(" , "),d("code",[e._v("-e")])]),e._v(" "),d("td",[e._v("Submit a job (JCL) contained in a data set. The data set can be physical sequential or a PDS member.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('zowe rse submit local-file "path/to/local/file"')])]),e._v(" "),d("td",[d("code",[e._v('zowe jobs submit local-file "path/to/local/file"')])]),e._v(" "),d("td",[d("code",[e._v("--wfo")]),e._v(" , "),d("code",[e._v("--wfa")]),e._v(" , "),d("code",[e._v("--vasc")]),e._v(" , "),d("code",[e._v("-d")]),e._v(" , "),d("code",[e._v("-e")])]),e._v(" "),d("td",[e._v("Submit a job (JCL) contained in a local file.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("zowe rse submit stdin")])]),e._v(" "),d("td",[d("code",[e._v("zowe jobs submit stdin")])]),e._v(" "),d("td",[d("code",[e._v("--wfo")]),e._v(" , "),d("code",[e._v("--wfa")]),e._v(" , "),d("code",[e._v("--vasc")]),e._v(" , "),d("code",[e._v("-d")]),e._v(" , "),d("code",[e._v("-e")])]),e._v(" "),d("td",[e._v("Submit a job (JCL) passed to the command via the stdin stream.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("zowe rse view job-status-by-jobid JOB00123")])]),e._v(" "),d("td",[d("code",[e._v("zowe jobs view job-status-by-jobid JOB00123")])]),e._v(" "),d("td"),e._v(" "),d("td",[e._v("View status details of a single z/OS job on spool or JES queues.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("zowe rse view spool-file-by-id JOB00123 4")])]),e._v(" "),d("td",[d("code",[e._v("zowe jobs view spool-file-by-id JOB00123 4")])]),e._v(" "),d("td"),e._v(" "),d("td",[e._v("View the contents of a spool file from a z/OS job on spool or JES queues.")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("zowe rse cancel job JOB03456")])]),e._v(" "),d("td",[d("code",[e._v("zowe jobs cancel job JOB03456")])]),e._v(" "),d("td"),e._v(" "),d("td",[e._v("Cancel a single job by job ID.")])])])])])}),[],!1,null,null,null);o.default=s.exports}}]);