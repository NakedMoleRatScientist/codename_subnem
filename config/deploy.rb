set :user, "hackerkiba"
set :deploy_root, "subnem.kibabase.com"
set :project_name, "subnem"
set :deploy_path, "#{deploy_root}/#{project_name}"
set :repo_location, "git://github.com/kiba/codename_subnem.git"
set :branch, "box2d"

role :web, "kibabase.com"

desc "create all the necessary folders"
task :setup do
  run "mkdir -p #{deploy_root}"
end

desc "do the initial checkout"
task :cold_deploy do
  run "cd #{deploy_root}; git clone #{repo_location} #{project_name}; cd #{project_name}; git checkout -b #{branch} --track origin/#{branch}"
end

desc "do a git pull to update the deployed code"
task :deploy do
  run "cd #{deploy_path}; git checkout #{branch}; git pull origin #{branch}"
end
