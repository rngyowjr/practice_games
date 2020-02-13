require_relative "tile"

class Board
  def self.empty_grid
    Array.new(9) do
      Array.new(9) {Tile.new(0)}
    end
  end

  def initialize(grid = Board.empty_grid)
    @grid = grid
  end
end