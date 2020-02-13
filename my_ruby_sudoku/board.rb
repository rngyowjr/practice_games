require_relative "tile"

class Board
  def self.empty_grid
    Array.new(9) do
      Array.new(9) {Tile.new(0)}
    end
  end
  
  def self.from_file(filename)
    rows = File.readlines(filename).map(&:chomp)
    tiles = rows.map do |row|
      nums = row.split("").map {|char| Integer(char)}
      nums.map {|num| Tile.new(num)}
    end

    self.new(tiles)
  end

  def initialize(grid = Board.empty_grid)
    @grid = grid
  end

  def [](pos)]
    row, col = pos
    grid[row][col]
  end

  def []=(pos, val)
    row, col = pos
    tile = grid[row][col]
    tile.value = value
  end

  def render
    puts " #{(0..8).to_a.join(' ')}"
    grid.each_with_index do |row, i|
      puts "#{i} #{row.join(' ')}"
    end
  end

  def rows
    grid
  end

  def columns
    rows.transpose
  end

  def size
    grid.size
  end

  
end