getActiveFilePath = () ->
  atom.workspace.getActivePaneItem()?.buffer?.file?.path

getRootDir = () ->
  dirs = atom.project.getDirectories()
  defaultPath = dirs[0]?.path
  return defaultPath if dirs.length < 2
  activeFilePath = getActiveFilePath()
  return defaultPath if not activeFilePath
  for dir in dirs
    return dir.path if activeFilePath.indexOf(dir.path + '/') is 0
  defaultPath

filterProcessEnv = () ->
  env = {}
  for key, value of process.env
    env[key] = value if key not in [
      # Filter out environment variables leaked by the Atom process:
      'NODE_PATH', 'NODE_ENV', 'GOOGLE_API_KEY', 'ATOM_HOME'
    ]
  env
