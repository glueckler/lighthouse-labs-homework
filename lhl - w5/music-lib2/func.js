function Library(name, creator) {

  this.name = name
  this.creator = creator
  this.playlists = []

  this.addPlaylist = function(playlist) {
    this.playlists.push(playlist)
  }

}

function Playlist(playlistName) {

  this.name = playlistName
  this.songs = []

  this.addSong = function(song) {
    this.songs.push(song)
  }

  this.overallRating = function() {
    const songsLength = this.songs.length
    const avgRating = this.songs.reduce( (a, b) => {
      return a.rating + b.rating;
    }, [0]) / songsLength
    return avgRating
  }

  this.totalDuration = function() {
    return this.songs.reduce( (a, b) => a.length + b.length, [0] )
  }
}

function Track(trackName, length, rating) {

  this.length = length
  this.name = trackName
  this.rating = rating


}