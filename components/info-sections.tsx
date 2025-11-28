export function InfoSections() {
  return (
    <section className="py-12 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">
        <div className="bg-white border-2 border-primary rounded-lg">
          <div className="p-8 space-y-16">
            {/* Metodologia de Avaliação */}
            <div className="text-center">
              <div className="portugal-accent-line w-32 mx-auto mb-8 rounded-full"></div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                <span className="text-primary">Metodologia</span> <span className="text-secondary">de Avaliação</span>
              </h3>
              <p className="text-muted-foreground text-xl mb-12 max-w-4xl mx-auto">
                Avaliamos cada casino através de critérios rigorosos para garantir que apenas os melhores operadores
                licenciados chegam ao nosso ranking.
              </p>

              <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="border-2 border-primary rounded-lg p-6 text-center bg-white">
                  <div className="text-3xl font-bold text-primary mb-3">35%</div>
                  <h4 className="text-foreground font-bold mb-3">Segurança</h4>
                  <p className="text-muted-foreground text-sm">Licenciamento SRIJ, encriptação e proteção de dados</p>
                </div>

                <div className="border-2 border-accent rounded-lg p-6 text-center bg-white">
                  <div className="text-3xl font-bold text-accent mb-3">25%</div>
                  <h4 className="text-foreground font-bold mb-3">Jogos</h4>
                  <p className="text-muted-foreground text-sm">Variedade, qualidade e fornecedores reconhecidos</p>
                </div>

                <div className="border-2 border-secondary rounded-lg p-6 text-center bg-white">
                  <div className="text-3xl font-bold text-secondary mb-3">25%</div>
                  <h4 className="text-foreground font-bold mb-3">Bónus</h4>
                  <p className="text-muted-foreground text-sm">Valor real, requisitos justos e transparência</p>
                </div>

                <div className="border-2 border-foreground rounded-lg p-6 text-center bg-white">
                  <div className="text-3xl font-bold text-foreground mb-3">15%</div>
                  <h4 className="text-foreground font-bold mb-3">Suporte</h4>
                  <p className="text-muted-foreground text-sm">Atendimento, pagamentos e experiência do utilizador</p>
                </div>
              </div>

              <div className="mt-12 border-2 border-primary rounded-lg p-8 max-w-4xl mx-auto bg-white">
                <h4 className="text-2xl font-bold text-primary mb-4">Compromisso de Independência</h4>
                <p className="text-foreground text-lg">
                  As nossas avaliações são 100% independentes. Testamos cada casino com dinheiro real e atualizamos as
                  classificações mensalmente para garantir informações precisas e atualizadas.
                </p>
              </div>
            </div>

            {/* Jogo Responsável */}
            <div className="text-center">
              <div className="portugal-accent-line w-32 mx-auto mb-8 rounded-full"></div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                <span className="text-secondary">Jogo Responsável</span>{" "}
                <span className="text-primary">em Portugal</span>
              </h3>

              <div className="max-w-4xl mx-auto space-y-8">
                <div className="border-2 border-secondary rounded-lg p-8 bg-white">
                  <h4 className="text-secondary font-bold text-2xl mb-4">O jogo pode causar dependência</h4>
                  <p className="text-foreground text-lg mb-6">
                    Os jogos de casino devem ser sempre encarados como entretenimento. Nunca jogue mais do que pode
                    permitir-se perder.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div>
                      <h5 className="text-foreground font-bold mb-3">Jogo Saudável:</h5>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>Define limites de tempo e dinheiro</li>
                        <li>Joga apenas por diversão</li>
                        <li>Para quando atinge os limites</li>
                        <li>Não persegue perdas</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-foreground font-bold mb-3">Sinais de Alerta:</h5>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>Jogar mais do que planeado</li>
                        <li>Mentir sobre perdas</li>
                        <li>Negligenciar responsabilidades</li>
                        <li>Ansiedade quando não joga</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-primary rounded-lg p-8 bg-white">
                  <h4 className="text-primary font-bold text-2xl mb-6">Onde Procurar Ajuda</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <p className="text-foreground font-semibold mb-2">Linha SOS Jogador</p>
                      <p className="text-primary font-bold text-3xl mb-2">213 950 840</p>
                      <p className="text-muted-foreground text-sm">Segunda a Sexta: 10h-20h</p>
                    </div>
                    <div className="text-center">
                      <p className="text-foreground font-semibold mb-2">ICAD Online</p>
                      <p className="text-primary font-bold text-xl mb-2">www.icad.pt</p>
                      <p className="text-muted-foreground text-sm">Recursos especializados</p>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-secondary rounded-lg p-6 text-center bg-white">
                  <p className="text-secondary font-bold text-2xl mb-2">PROIBIDO A MENORES DE 18 ANOS</p>
                  <p className="text-foreground text-lg">Apenas para maiores de idade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
