var playlist = { Soundgarden: "Superunknown"}

function updatePlaylist(playlistObj, artistNameString, songTitleString)
{
  playlistObj[artistNameString] = songTitleString
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist.artistName
}