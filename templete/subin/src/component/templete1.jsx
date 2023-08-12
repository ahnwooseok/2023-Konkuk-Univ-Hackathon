import '../css/templete1.css'
export default function Templete1() {
    return(
<html>
    <head>
        <link rel="stylesheet" href="../css/templete1.css" />
    </head>
    <body>
        <div class="templete1">
            <div class="header">
                <h1 class="title">
                    타이틀
                </h1>
            </div>
            <div class="left">
                <p id="content1">본문내용1</p>
                <p id="content2">본문내용2</p>
                <p id="content3">본문내용3</p>
                <p id="content4">본문내용4</p>
                <p id="content5">본문내용5</p>
            </div>
            <div class="right">
                <p id="content6">본문내용1</p>
                <p id="content7">본문내용2</p>
                <p id="content8">본문내용3</p>
                <p id="content9">본문내용4</p>
                <p id="content10">본문내용5</p>
            </div>
        </div>
    </body>
</html>
    );
}