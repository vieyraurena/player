class Canvas {
  constructor(bufferLength, x, barWidth, barHeight, dataArray) {
    this.bufferLength = bufferLength;
    this.x = x;
    this.barWidth = barWidth;
    this.barHeight = barHeight;
    this.dataArray = dataArray;
  }

  drawBars() {
    let ctx = canvas.getContext ("2d");

    for(let i = 0; i < this.bufferLength; i++) {
      this.barHeight = this.dataArray[i];
      ctx.fillStyle = "#fff";
      ctx.fillRect (canvas.width/2 - this.x, canvas.height - this.barHeight, this.barWidth, this.barHeight);
      this.x += this.barWidth;
    }

    for(let i = 0; i < this.bufferLength; i++) {
      this.barHeight = this.dataArray[i];
      ctx.fillStyle = "#fff";
      ctx.fillRect (this.x, canvas.height - this.barHeight, this.barWidth, this.barHeight);
      this.x += this.barWidth;
    }
  }

}

export {
  Canvas
}
