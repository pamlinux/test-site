# A very simple Flask Hello World app for you to get started with...

from flask import Flask

app = Flask(__name__)
name = __name__

@app.route('/')
def hello_world():
    return f"""<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
<html> <head>
<title>Stop War in Ukraine</title>
<link href="/static/styles/Russia.css" rel="stylesheet" type="text/css">
</head>

<body>
<h1>Stop War in Ukraine</h1>
<p class="protest_placard">&#1041;&#1086;&#1075; &#1089; &#1056;&#1086;&#1089;&#1089;&#1080;&#1077;&#1081;</p>

<p class="protest_placard">
  &nbsp;&#1047;&#1077;&#1083;&#1077;&#1085;&#1089;&#1082;&#1080;&#1081; &#1087;&#1086;&#1078;&#1072;&#1083;&#1091;&#1081;&#1089;&#1090;&#1072</p>

<p class="protest_placard">&#1076;&#1086;&#1075;&#1086;&#1074;&#1072;&#1088;&#1080;&#1074;&#1072;&#1081;&#1089;&#1103; &#1089; &#1055;&#1091;&#1090;&#1080;&#1085;&#1099;&#1084;</p>



<hr>
<address></address>
<!-- hhmts start -->Last modified: Tue Apr 18 09:54:29 CEST 2023 <!-- hhmts end -->
</body> </html>"""

