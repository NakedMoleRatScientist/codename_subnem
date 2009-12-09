require 'rubygems'
require 'net/ftp'
require 'yaml'

def load_file file
  file = File.read(file)
  file = YAML::Load(file)
  return file
end

#Warning:config.yml is full of password and other information that shall not be divulged.
config = load('config.yml')

ftp = NET::FTP.new(config['host'])
