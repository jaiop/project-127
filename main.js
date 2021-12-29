song_1 = " ";
song_2 = " ";

function preload()
{
    song_1 = loadSound("Young Shahrukh - Tesher.mp3");
    song_2 = loadSound("Whoopty Song Download Mp3 2021(SongsZilla.Net).mp3");
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.position(350,200);

    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
   image(video,0,0,600,500);
}