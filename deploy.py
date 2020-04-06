from subprocess import run

def deploy():
    run(['git','fetch'],check=True)
    run(['git','checkout','gh-pages'],check=True)
    run(['git','pull'],check=True)
    run(['git','checkout','master'],check=True)
    run(['git','rebase','gh-pages'],check=True)
    run(['git','push','-f'],check=True)
    run(['git','checkout','dev'],check=True)

if __name__ == "__main__":
    deploy()