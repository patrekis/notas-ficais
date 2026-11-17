from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
USER = Path.home()
SOURCES = [("Projeto", ROOT / ".agents/skills"), ("Globais compartilhadas", USER / ".agents/skills"), ("Globais Codex", USER / ".codex/skills"), ("Plugins locais", USER / ".codex/plugins/cache/openai-curated-remote")]

def metadata(path):
    content = path.read_text(encoding="utf-8-sig")
    match = re.match(r"\A---\s*\n(.*?)\n---", content, re.S)
    if not match:
        return path.parent.name, "Consulte o arquivo de instruções."
    header = match.group(1)
    name = re.search(r"(?m)^name:\s*[\"']?([^\n\"']+)", header)
    desc = re.search(r"(?m)^description:\s*(.*)$", header)
    value = desc.group(1).strip().strip("\"'") if desc else ""
    if value in ("|", ">", "|-", ">-"):
        lines = []
        for line in header[desc.end():].splitlines()[1:]:
            if line and not line[0].isspace():
                break
            lines.append(line.strip())
        value = " ".join(lines)
    return (name.group(1).strip() if name else path.parent.name, value or "Consulte o arquivo de instruções.")

def main():
    output = ["# Inventário de skills disponíveis no ambiente", "", "Gerado a partir dos arquivos locais. Descrições são metadados das próprias skills; consulte o arquivo antes de usar. A disponibilidade pode mudar entre sessões.", ""]
    for label, root in SOURCES:
        output += [f"## {label}", ""]
        paths = sorted({*root.rglob("SKILL.md"), *root.rglob("skill.md")}, key=lambda p: str(p).lower()) if root.exists() else []
        for path in paths:
            try:
                name, description = metadata(path)
            except (OSError, UnicodeError):
                name, description = path.parent.name, "Não foi possível ler; confira o arquivo."
            output.append(f"- **{name}** — {description.replace(chr(10), ' ')}  \n  Arquivo: `{path.as_posix()}`")
        if not paths:
            output.append("Nenhuma skill encontrada neste diretório.")
        output.append("")
    (ROOT / "docs/INVENTARIO_SKILLS.md").write_text("\n".join(output), encoding="utf-8")
    print("Inventário atualizado.")

if __name__ == "__main__":
    main()
