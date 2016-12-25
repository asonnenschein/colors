import {interpolateRgb} from "d3-interpolate"
import {range} from "d3-array"
import {easeLinear} from "d3-ease"
import {active} from "d3-transition"
import {select} from "d3-selection"


const violet = "#9400D3"
const indigo = "#4B0082"
const blue = "#0000FF"
const green = "#00FF00"
const yellow = "#FFFF00"
const orange = "#FF7F00"
const red = "#FF0000"


const violetIndigo = interpolateRgb(violet, indigo)
const indigoBlue = interpolateRgb(indigo, blue)
const blueGreen = interpolateRgb(blue, green)
const greenYellow = interpolateRgb(green, yellow)
const yellowOrange = interpolateRgb(yellow, orange)
const orangeRed = interpolateRgb(orange, red)
const redViolet = interpolateRgb(red, violet)


function main() {

  const height = window.innerHeight
  const width = window.innerWidth
  const tiles = (height * width) / 100

  select("body").selectAll("div")
    .data(range(tiles))
    .enter().append("div")
    .transition()
    .delay(() => Math.floor(Math.random() * tiles / 4) + 0)
    .ease(easeLinear)
    .on("start", function repeat() {
      active(this)
        .styleTween("background-color", () => violetIndigo)
      .transition()
        .delay(1000)
        .styleTween("background-color", () => indigoBlue)
      .transition()
        .delay(1000)
        .styleTween("background-color", () => blueGreen)
      .transition()
        .delay(1000)
        .styleTween("background-color", () => greenYellow)
      .transition()
        .delay(1000)
        .styleTween("background-color", () => yellowOrange)
      .transition()
        .delay(1000)
        .styleTween("background-color", () => orangeRed)
      .transition()
        .delay(1000)
        .styleTween("background-color", () => redViolet)
      .transition()
        .delay(1000)
        .on("start", repeat)
    })
}

main()

select(window).on("resize", main)
